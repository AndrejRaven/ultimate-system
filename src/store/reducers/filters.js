import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    page: 1,
    perPage: 5,
    filter: {
      isActivated: "ACTIVE,INACTIVE",
    },
    sort: {
      id: "asc",
      name: "asc",
      surname: "asc",
      birth_date: "asc",
    },
    searh: "",
  },
  reducers: {
    setPage: (state, page) => {
      state.page = page;
    },
    setPerPage: (state, perPage) => {
      state.perPage = perPage;
    },
    setFilters: (state, filters) => {
      state.filter.isActivated = filters;
    },
    setSortId: (state, sortDirection) => {
      state.sort.id = sortDirection;
    },
    setSortName: (state, sortDirection) => {
      state.sort.name = sortDirection;
    },
    setSortSurname: (state, sortDirection) => {
      state.sort.surname = sortDirection;
    },
    setSortBirthDate: (state, sortDirection) => {
      state.sort.birth_date = sortDirection;
    },
    setSearch: (state, searchPhrase) => {
      state.searh = searchPhrase;
    },
  },
});

export const {
  SetPage,
  setPerPage,
  setFilters,
  setSortId,
  setSortName,
  setSortSurname,
  setSortBirthDate,
  setSearch,
} = filtersSlice.actions;

export default filtersSlice.reducer;
