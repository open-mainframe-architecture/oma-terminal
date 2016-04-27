'BaseObject+Manager'.subclass(I => {
  "use strict";
  I.am({
    Abstract: false,
    Service: true
  });
  I.have({
    // stateless renderer of virtual user interface
    uiRenderer: null,
    // stateful local controller
    localController: null,
    // forward session with terminal model
    forwardSession: null
  });
})