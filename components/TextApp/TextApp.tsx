import textData from "../../data/data.json";
import parse from "html-react-parser";

interface TextAppProps {
  labelID: string;
}

/**
 * Component for rendering texts through a json file. It is necessary to have previously created a json data with the ids of the texts
 * @param labelID id of the text that matches with the json file
 */

const TextApp = ({ labelID }: TextAppProps) => {
  const dataParse = textData as any;
  return <>{parse(dataParse[labelID])}</>;
};

export default TextApp;
