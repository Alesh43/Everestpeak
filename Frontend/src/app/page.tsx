import Conclusion from "@/component/conclusion";
import HighAltitudeAdvantages from "@/component/highaltitudeadvantages";
import Introduction from "@/component/introduction";
import Purpose from "@/component/purpose";
import Services from "@/component/services";
import TargetAudience from "@/component/targetaudience";
import Slider from "@/component/slider";
import BackgroundVideo from "@/component/backgroundvideo";
import TrustedBy from "@/component/trustedBy";

export default function Home() {
  return (
    <div className="pt-20">
      <Introduction />
      <BackgroundVideo />
      <TrustedBy />
      <Purpose />
      <Slider />
      <HighAltitudeAdvantages />
      <Services />
      <TargetAudience />
      <Conclusion />
    </div>
  );
}
