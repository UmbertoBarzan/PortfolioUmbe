import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { language } = useLanguage();

  const stringsByLanguage = {
    en: [
      "3D Developer",
      "Unreal Engine & VR",
      "Blender",
      "Building immersive projects",
      "Python Developer",
    ],
    it: [
      "Sviluppatore 3D",
      "Unreal Engine e VR",
      "Blender",
      "Progetti immersivi in crescita",
      "Sviluppatore Python",
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
