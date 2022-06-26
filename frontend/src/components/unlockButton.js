function UnlockButton() {
  return (
    <div>
      <button
        onClick={
          window.unlockProtocol && window.unlockProtocol.loadCheckoutModal()
        }
      >
        Unlock your grants!
      </button>
    </div>
  );
}

export default UnlockButton;
