import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { language } = useLanguage();

  const stringsByLanguage = {
    en: [
      "Learning Computer Vision",
      "Exploring AI & IoT",
      "Python Developer",
      "Growing through Projects",
    ],
    it: [
      "Studio Computer Vision",
      "Sperimentazione su AI e IoT",
      "Sviluppatore Python",
      "Crescita attraverso i progetti",
    ],
  };

  const strings = stringsByLanguage[language] || stringsByLanguage.en;

  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
