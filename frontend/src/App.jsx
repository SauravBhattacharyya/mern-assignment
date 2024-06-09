import { getFormDetails } from "./services";
import { useQuery } from "@tanstack/react-query";
import TextInput from "./components/TextInput";
import ImageInput from "./components/ImageInput";
import DropdownSingle from "./components/DropdownSingle";
import CheckboxList from "./components/CheckboxList";
import RadioList from "./components/RadioList";
import VideoInput from "./components/VideoInput";
import DatePicker from "./components/DatePicker";
import PDFInput from "./components/PDFInput";

export default function App() {
  const componentMapping = {
    TextInput,
    ImageInput,
    DropdownSingle,
    CheckboxList,
    RadioList,
    VideoInput,
    DatePicker,
    PDFInput,
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["formData"],
    queryFn: getFormDetails,
  });

  const renderComponent = (item) => {
    const Component = componentMapping[item.comp];

    if (!Component) return null;
    const additionalProps = {};
    if (item.comp === "CheckboxList") {
      additionalProps.selectedValues = data[item.props.id] || [];
    }
    return (
      <Component key={item.props.id} {...item.props} onChange={handleChange} />
    );
  };

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="app">
      <form onSubmit={handleSubmit} className="form">
        {data?.data?.map((item, index) => (
          <div key={index} className="form-group">
            {renderComponent(item)}
          </div>
        ))}
      </form>
    </main>
  );
}
