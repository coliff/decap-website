import React, { useState, useEffect, memo } from 'react';
import styled from '@emotion/styled';

import theme from '../theme';
import searchIcon from '../img/search.svg';

const SearchForm = styled.form`
  > span {
    width: 100%;
  }
`;

const SearchField = styled.input`
  color: white;
  font-size: ${theme.fontsize[3]};
  border-radius: ${theme.radii[1]};
  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.darkerGray};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: ${theme.space[2]} 50%;
  border: 0;
  appearance: none;
  width: 100%;
  padding: ${theme.space[2]};
  padding-left: 30px;
  outline: 0;
`;

function DocSearch() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        appId: '633NBL2XMU',
        apiKey: '2e154688e9f443d6d895c9f226f01833',
        indexName: 'decapcms',
        inputSelector: '#algolia-search',
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    } else {
      setEnabled(false);
    }
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <SearchForm>
      <SearchField type="search" placeholder="Search the docs" id="algolia-search" />
    </SearchForm>
  );
}

export default memo(DocSearch);
