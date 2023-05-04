import appData from "../../data/data.json";
import parse from "html-react-parser";

interface TextAppProps {
  labelID: string;
  textData?: any
}

/**
 * Component for rendering texts through a json file. It is necessary to have previously created a json data with the ids of the texts
 * @param labelID id of the text that matches with the json file
 * @param textData json source to get the text data
 */

const TextApp = ({ labelID, textData = appData }: TextAppProps) => {
  return <>{parse(textData[labelID])}</>;
};

export default TextApp;
