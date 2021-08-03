import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const logger = (state) => state.contacts.logger;

export const filteredArrayContact = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filterValue = filter.toLowerCase();
    const filterText = (value) => value.toLowerCase().includes(filterValue);

    return contacts.filter(({ name }) => filterText(name));
  }
);
