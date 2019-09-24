// react
import React, { Component } from 'react';
// components
import Card from '../Card';
import Loader from '../Loader'
import Pagination from '../Pagination';
// style
import './planet.scss';
// utils
import { baseUrl } from '../../utils/apiBaseUrl'

class Planet extends Component {
  state = {
        planets: [],
        data: {},
        loading: true,
      }

  async componentDidMount() {
    if (window.location.search) {
      const page = window.location.search.split('=');
      const url = `${baseUrl}/planets?page=${page[1]}`;
      const planetData = await fetch(url);
      const planetList = await planetData.json();

      this.setState ({
        planets: planetList.results,
        loading: false,
        data: planetList.count,
      });

      return;
    }

    const url = `${baseUrl}/planets`;
    const planetData = await fetch(url);
    const planetList = await planetData.json();
    

    this.setState ({
      planets: planetList.results,
      loading: false,
      data: planetList.count,
    });
  }

  render() {
    return (
      this.state.loading ? <Loader /> :
        <div>
          <div className="planet-dash">
            {
                this.state.planets.map(planet => {
                  return (
                    <Card
                      key={planet.url.split('/')[5]}
                      type="planets"
                      url={`/planets`}
                      api={planet.url}
                      title={planet.name}
                      climate={planet.climate}
                      population={planet.population}
                      image="https://res.cloudinary.com/walsam/image/upload/v1569147185/planet-2.jpg"
                      summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  );
                })
            }
          </div>
            <Pagination
              page="planet"
              pageCount={this.state.data}
            />
        </div>
    );
  }
}

export default Planet;
