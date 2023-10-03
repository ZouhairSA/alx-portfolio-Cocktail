import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
          placeholder="Search for your favourite drinks...."
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching...." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
