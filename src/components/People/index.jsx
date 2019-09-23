// react
import React, { Component } from 'react';
// components
import Card from '../Card';
import Pagination from '../Pagination';
// style
import './people.scss';
// utils
import { baseUrl } from '../../utils/apiBaseUrl'

class People extends Component {
  state = {
        people: [],
        next: '',
        previous: '',
      }

  async componentDidMount() {
    const page = window.location.search.split('=');
    if (window.location.search) {
      const url = `${baseUrl}/people/?page=${page[1]}`;
      const peopleData = await fetch(url);
      const peopleList = await peopleData.json();

      this.setState ({
        people: peopleList.results,
      });

      return;
    }

    const url = `${baseUrl}/people/?page=1`;
    const peopleData = await fetch(url);
    const peopleList = await peopleData.json();
    

    this.setState ({
      people: peopleList.results,
    });
  }

  render() {
    return (
      <div>
        <div className="people-dash">
          {
            this.state.people.map(person => {
              return (
                <Card
                  key={person.url.split('/')[5]}
                  type="people"
                  url={`/people`}
                  api={person.url}
                  title={person.name}
                  dob={person.birth_year}
                  gender={person.gender}
                  image="https://res.cloudinary.com/walsam/image/upload/v1569263415/character-1.jpg"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              );
            })
          }
        </div>
          <Pagination />
      </div>
    );
  }
}

export default People;
