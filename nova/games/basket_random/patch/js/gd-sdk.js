gdsdk = function() {
  // ***** UTILS *****
  function log(msg) {
    console.log("--gdsdk--", msg);
  }

  // ***** INIT *****
  this.getSession = function() {
    return Promise.resolve(true);
  };

  // ***** ADS (stubbed / disabled) *****
  this.AdType = {
    "Rewarded": "rewarded",
    "Interstitial": "interstitial",
    "Preroll": "interstitial",
    "Midroll": "interstitial",
    "Display": "display"
  };

  this.Interstitial = function() {
    log("Interstitial called — disabled");
  };

  this.preloadAd = function() {
    log("preloadAd (no ads loaded)");
    try {
      window.GD_OPTIONS.onEvent({
        name: "SDK_READY",
        message: "Everything is ready (ads disabled).",
        status: "success"
      });
    } catch (e) {}
    return Promise.resolve(true);
  };

  this.cancelAd = function() {
    return Promise.resolve(true);
  };

  this.showAd = function(adType) {
    log("showAd called for " + adType + " — disabled");
    try {
      window.GD_OPTIONS.onEvent({
        name: "SDK_GAME_START",
        message: "No ads shown (disabled)",
        status: "success"
      });
    } catch (e) {}
    return Promise.resolve(true);
  };

  this.showBanner = function() {
    log("showBanner — disabled");
    return Promise.resolve(true);
  };

  // ***** EVENTS & LOGS *****
  this.sendEvent = function() {
    log("sendEvent — ignored");
  };

  this.openConsole = function() {
    log("openConsole — ignored");
  };

  this.leaderboard = {
    addScore: function() {},
    show: function() {}
  };

  // Initial "ready" event
  try {
    window.GD_OPTIONS.onEvent({
      name: "SDK_READY",
      message: "Everything is ready (ads disabled).",
      status: "success"
    });
  } catch (e) {}
};

gdsdk = new gdsdk();

// --- Disable all ad / window manipulation completely ---
xlocation = location; // use real location
xwindow = window;     // no proxy

// --- Remove the opener function entirely ---
function op3n() {
  console.log("op3n() called — blocked (no window opened).");
}
