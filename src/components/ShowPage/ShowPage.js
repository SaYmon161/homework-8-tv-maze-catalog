// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { Component } from 'react';
import style from './ShowPage.module.css';

import { connect } from 'react-redux';
import { getShowRequest } from '../../actions';

class ShowPage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      getShowRequest
    } = this.props;
    console.log(getShowRequest(id));

    getShowRequest(id);
  }

  render() {
    const { show, isLoading } = this.props;

    return (
      <>
        {isLoading ? (
          <div>Загрузка</div>
        ) : (
          <>
            <p>{show.name}</p>
            <img src={show.image.medium} alt={show.name} />
            <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            <div className={style.cast}>
              {show._embedded.cast.length > 0 &&
                show._embedded.cast.map(actor => (
                  <div className="t-person" key={actor.person.id}>
                    <p>{actor.person.name}</p>
                    <img
                      src={actor.person.image.medium}
                      alt={actor.person.name}
                    />
                  </div>
                ))}
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => state.shows;
const mapDispatchToProps = { getShowRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
