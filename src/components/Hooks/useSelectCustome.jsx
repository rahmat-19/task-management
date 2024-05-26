import { useEffect, useRef, useState } from "react";

const useSelectCustome = (items, changeSlectItem, searchAble) => {
  const [open, setOpen] = useState(false);
  const [datas, setDatas] = useState(items);
  const [seacrh, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % datas.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex(
        (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        changeSlectItem(datas[highlightedIndex]?.value);
      }
    }
  };

  const handlePositionSearch = (e, clear = false) => {
    if (clear) {
      setDatas(items);
    } else {
      const searchTerm = e.target.value.toLowerCase();
      setSearch(searchTerm);
      const filteredOptions = items.filter((option) =>
        option.label.toLowerCase().includes(searchTerm)
      );
      setDatas(filteredOptions);
    }
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setOpen(false);
  //       setHighlightedIndex(-1);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    if (highlightedIndex >= 0 && highlightedIndex < datas.length) {
      // Dapatkan elemen yang dipilih
      const selectedElement = dropdownRef.current.children[highlightedIndex];
      // Gulirkan ke elemen yang dipilih
      selectedElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [highlightedIndex]);

  useEffect(() => {
    if (open) {
      if (searchAble) {
        searchInputRef.current.focus();
      } else {
        dropdownRef.current.focus();
      }
    }
  }, [open]);

  return {
    handlePositionSearch,
    setOpen,
    setSearch,
    handleKeyDown,
    open,
    datas,
    seacrh,
    highlightedIndex,
    dropdownRef,
    searchInputRef,
  };
};

export { useSelectCustome };
