import {useState, useEffect} from 'react';
import {MpSdk} from '@matterport/webcomponent';
import {Showcase} from '@/components/Showcase';
import {WebComponent} from '@/components/WebComponent';
import {Brand, Dollhouse, Help, OpenBehavior, Play, Quickstart, Tour, GuidedTour, HighlightReel, MlsBehavior, Mattertags, TagNavigation, Pin, Portal, SwitchFloors, FloorPlanView, Language, Zoom, Search, Wheel, GuidedTourPan, LoopBack, Title, GuidedTourCallToAction, HighlightReelBehavior, VirtualReality} from '@/types/enums';

/**
 * Home component. MpViewer wrapper
 *
 * @returns {JSX.Element} Component
 * @component
 */
const Home = () => {
  const [sdk, setSdk] = useState<MpSdk | null>(null);

  const configSdk = {
    modelId: process.env.NEXT_PUBLIC_MODEL_ID!,
    assetBase: '/assets',
    containerClassName: 'showcase flex h-screen p-2 bg-teal-500',
    componentClassName: 'relative flex-1',
    help: Help.Hide,
    openBehavior: OpenBehavior.SameBrowserTab,
    quickstart: Quickstart.Enable,
    play: Play.Manual,
    brand: Brand.Hide,
    dollhouse: Dollhouse.Show,
    tour: Tour.Model,
    guidedTour: GuidedTour.Show,
    highlightReel: HighlightReel.Show,
    mlsBehavior: MlsBehavior.Branding,
    mattertags: Mattertags.Show,
    tagNavigation: TagNavigation.Show,
    pin: Pin.Show,
    portal: Portal.Show,
    switchFloors: SwitchFloors.Enable,
    floorPlanView: FloorPlanView.Enable,
    language: Language.Default,
    zoom: Zoom.Enable,
    search: Search.Enable,
    wheel: Wheel.Enable,
    guidedTourPan: GuidedTourPan.Disable,
    loopBack: LoopBack.Disable,
    title: Title.Enable,
    guidedTourCallToAction: GuidedTourCallToAction.Large,
    timeBeforeGuidedTour: undefined,
    highlightReelBehavior: HighlightReelBehavior.Expended,
    virtualReality: VirtualReality.Hide,
  };

  useEffect(() => {
    const init = async () => {
      if (sdk) {
        console.debug('Home: sdk', sdk);

        // Create a scene object
        const [sceneObject] = await sdk.Scene.createObjects(1);
        var node = sceneObject.addNode();

        var initial = {
          enabled: true,
          color: {
            r: 1,
            g: 1,
            b: 1,
          },
          intensity: 1,
        };

        var pointLightinitial = {
          enabled: true,
          color: {
            r: 1,
            g: 1,
            b: 1,
          },
          intensity: 1,
          position: {
            x: 7,
            y: 1,
            z: 10,
          },
          distance: 10,
          decay: 1,
          debug: false,
        };

        node.addComponent('mp.ambientLight', initial);
        node.addComponent('mp.pointLight', pointLightinitial);

        // Configure and add the GLTF loader component
        const gltfComponent = node.addComponent('mp.gltfLoader', {
          url: '/assets/models/nesspresso-machine.glb', // Replace with your model URL
          visible: true,
          localScale: {x: 0.05, y: 0.05, z: 0.05},
          localPosition: {x: 7.3, y: -0.7, z: 10.3},
          localRotation: {x: 0, y: 0, z: 0}, // Rotate 180 degrees on the Y-axis
        });

        // Start the scene object
        sceneObject.start();
      }
    };

    init();
  }, [sdk]);

  return (
    <div className="flex flex-col h-screen p-2 bg-gray-200">
      <div style={{display: 'none'}}>
        <h2>Showcase SDK</h2>
        <Showcase config={configSdk} setMpSdk={setSdk} />
        <br />
      </div>
      <h2>Web Component</h2>
      <WebComponent config={configSdk} setMpSdk={setSdk} />
    </div>
  );
};

export default Home;
