pragma solidity ^0.8.0;

contract Escrow {
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE }
    
    State public currState;
    int public milestone;
    address public buyer;
    address payable public seller;

    constructor(address _buyer, address payable _seller) public {
        buyer = _buyer;
        seller = _seller;
    }

    modifier onlyBuyer() {
        require(msg.sender == buyer, "should be a buyer to call this method");
        _;
    }

    function deposit() onlyBuyer external payable {
        require(currState == State.AWAITING_PAYMENT, "applicant already paid or did not apply");
        currState = State.AWAITING_DELIVERY;
    }

    function confirmMilestone() onlyBuyer external {
        require(currState == State.AWAITING_DELIVERY, "No delivery in progress");
        seller.transfer(address(this).balance);
        currState = State.COMPLETE;
    }
}