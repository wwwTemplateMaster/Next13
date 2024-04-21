const ProductListing = ({ product }: { product?: Product }) => {
  // See More/ Expand

  // Fuck this shit
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expansion and popover visibility
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the description into words
  const words = safeProduct.description.split(" ");

  // Initial number of words to show
  const initialWordsToShow = 6;

  // Join the initial words to create a shortened description
  const shortenedDescription = words.slice(0, initialWordsToShow).join(" ");

  /* See more popover */
};
<Popover>
  <PopoverTrigger asChild>
    <p style={{ margin: 0 }}>
      {isExpanded ? safeProduct.description : shortenedDescription}{" "}
      <span
        onClick={toggleExpansion}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        See more...
      </span>
    </p>
  </PopoverTrigger>

  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Description</h4>
      </div>
      <p>{safeProduct.description}</p>
    </div>
  </PopoverContent>
</Popover>;

{
  /* See more popover */
}
