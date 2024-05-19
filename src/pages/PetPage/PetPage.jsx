import { globalColors } from "../../Styled/GlobalColors";
import PetInfo from "../../components/PetInfo";
import { useEffect } from "react";

const PetPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = globalColors.light;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <PetInfo />
    </>
  );
};

export default PetPage;