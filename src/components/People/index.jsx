// react
import React, { Component } from 'react';
// components
import Card from '../Card';
import Loader from '../Loader'
import Pagination from '../Pagination';
// style
import './people.scss';
// utils
import { baseUrl } from '../../utils/apiBaseUrl'

class People extends Component {
  state = {
        people: [],
        loading: true,
        data: {},
      }

  async componentDidMount() {
    if (window.location.search) {
      const page = window.location.search.split('=');
      const url = `${baseUrl}/people?page=${page[1]}`;
      const peopleData = await fetch(url);
      const peopleList = await peopleData.json();

      this.setState ({
        people: peopleList.results,
        loading: false,
        data: peopleList.count,
      });

      return;
    }

    const url = `${baseUrl}/people`;
    const peopleData = await fetch(url);
    const peopleList = await peopleData.json();
    

    this.setState ({
      people: peopleList.results,
      loading: false,
      data: peopleList.count,
    });
  }

  render() {
    return (

      this.state.loading ? <Loader /> :
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
                    />
                  );
                })
            }
          </div>
            <Pagination
              page="people"              
              pageCount={this.state.data}
            />
        </div>
    );
  }
}

export default People;
