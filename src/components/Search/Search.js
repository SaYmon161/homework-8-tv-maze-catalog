// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { Component } from 'react';
import style from './Search.module.css';
import { connect } from 'react-redux';

import { getSearchRequest } from '../../actions';
import ShowPreview from '../ShowPreview';

class Search extends Component {
  state = { showsName: '' };

  handleClick = e => {
    e.preventDefault();
    const { getSearchRequest } = this.props;
    const { showsName } = this.state;

    if (showsName.length > 0) {
      getSearchRequest(showsName);
    }
  };

  handleInput = e => {
    this.setState({
      showsName: e.target.value
    });
  };

  render() {
    const { shows, isLoading } = this.props;

    return (
      <>
        {isLoading ? (
          <div>Загрузка</div>
        ) : (
          <>
            <div className={style.previewList}>
              <input
                type="text"
                className={`${style.input} t-input`}
                placeholder="Название сериала"
                onChange={this.handleInput}
                value={this.showsName}
              />
              <div className={style.buttonWrapper}>
                <button
                  className={`${style.button} t-search-button`}
                  onClick={this.handleClick}
                >
                  Найти
                </button>
              </div>
            </div>
            <div className={`${style.searchPanel} t-search-result`}>
              {shows.length > 0 &&
                shows.map(show => (
                  <ShowPreview show={show} key={show.id}></ShowPreview>
                ))}
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => state.search;
const mapDispatchToProps = { getSearchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
