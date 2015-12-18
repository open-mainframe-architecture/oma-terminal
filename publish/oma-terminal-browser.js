function configure(bundle) {
  "use strict";
  bundle.description = 'This bundle turns a browser into a booting terminal.';
  bundle.archives = {
    'oma-delta': '1.4.x',
    'oma-ui': '1.4.x'
  };
  bundle.includes = [
    'Pub.Oma.Delta.Types', 'Pub.Oma.Delta.Core',
    'Pub.Oma.Terminal.Core',
    'Pub.Oma.UI.Types'
  ];
}