function configure(bundle) {
  "use strict";
  bundle.description = 'Boot a terminal in a new browser window.';
  bundle.versions = {
    'oma-delta': '1.4.x',
    'oma-ui': '1.4.x'
  };
  bundle.includes = [
    'Pub.Oma.Delta.Types', 'Pub.Oma.Delta.Core',
    'Pub.Oma.Terminal.Core',
    'Pub.Oma.UI.Types'
  ];
}