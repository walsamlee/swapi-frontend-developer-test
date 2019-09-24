// react
import React, { Component } from 'react';
// components
import Card from '../Card';
import Loader from '../Loader'
import Pagination from '../Pagination';
// style
import './starship.scss';
// utils
import { baseUrl } from '../../utils/apiBaseUrl'

class Starship extends Component {
  state = {
        starships: [],
        data: {},
        loading: true,
      }

  async componentDidMount() {
    if (window.location.search) {
      const page = window.location.search.split('=');
      const url = `${baseUrl}/starships?page=${page[1]}`;
      const starshipData = await fetch(url);
      const starshipList = await starshipData.json();

      this.setState ({
        starships: starshipList.results,
        loading: false,
        data: starshipList.count,
      });

      return;
    }

    const url = `${baseUrl}/starships`;
    const starshipData = await fetch(url);
    const starshipList = await starshipData.json();
    

    this.setState ({
      starships: starshipList.results,
      loading: false,
      data: starshipList.count,
    });
  }

  render() {
    return (
      this.state.loading ? <Loader /> :
        <div>
          <div className="starship-dash">
            {
                this.state.starships.map(starship => {
                  return (
                    <Card
                      key={starship.url.split('/')[5]}
                      type="starships"
                      url={`/starships`}
                      api={starship.url}
                      title={starship.name}
                      model={starship.model}
                      capacity={starship.cargo_capacity}
                      image="https://res.cloudinary.com/walsam/image/upload/v1569147163/starship-3.jpg"
                      summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                  );
                })
            }
          </div>
            <Pagination
              page="starship"
              pageCount={this.state.data}
            />
        </div>
    );
  }
}

export default Starship;
