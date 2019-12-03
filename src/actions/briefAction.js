import{ FETCH_BREIFS,NEW_BREIF} from './types'
export const fetchBreifs = () => dispatch => {
    console.log('fetch');
    fetch('http://localhost:4000/briefs')
      .then(res => res.json())
      .then(breifs =>
        dispatch({
          type: FETCH_BREIFS,
          payload: breifs
        })
      );
  };
  export const createBreif = (breifData) => dispatch => {
    console.log('new');
    fetch('http://localhost:4000/briefs',{
      method:'POST',
      headers:{
          'content-type':'application/json'
      },
      body:JSON.stringify(breifData)
  })
  .then(res => res.json())
  .then(data =>  dispatch({
    type: NEW_BREIF,
    payload: data
  })
);
  };