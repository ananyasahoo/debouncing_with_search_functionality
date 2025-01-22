import React, { useState, useEffect } from "react";

const DebounceSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Tracks user input
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>(""); // Tracks debounced value

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    // clean function for clear timeout
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Trigger the API or search logic with the debounced value
      console.log("Performing search for:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]); // Run effect when debounced value changes

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <p>Search Term: {searchTerm}</p>
      <p>Debounced Term: {debouncedSearchTerm}</p>
    </div>
  );
};
export default DebounceSearch;
