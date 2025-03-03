"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowDownIcon } from "../../assets/icons";
import styles from "./styles.module.css";

const statuses = ["Все статусы", "Live", "Finished", "Match preparing"];

type SelectProps = {
  selected: string;
  onChange: (selected: string) => void;
};

export const Select = ({ selected, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [top, setTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setTop(rect.height + 8);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.mainContainer}>
      <div
        ref={containerRef}
        className={styles.container}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <ArrowDownIcon rotated={isOpen} />
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className={styles.dropdownList}
          style={{ width: `${width}px`, top: `${top}px` }}
        >
          {statuses.map((status) => (
            <div
              key={status}
              className={styles.dropdownItem}
              onClick={() => {
                onChange(status);
                setIsOpen(false);
              }}
            >
              {status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
