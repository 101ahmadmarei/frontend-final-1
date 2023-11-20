import React from 'react'
import DetailsCarosel from '../../Component/DetailsCarosel/DetailsCarosel';
import BasicTab from '../../Component/BasicTab/BasicTab';
// import DetailsCarosel from '../../Component/DetailsCarosel/DetailsCarosel';
import DetailsDescription from '../../Component/DetailsDescription/DetailsDescription';
import { useParams } from 'react-router';
import { useRetriveData } from '../../API/getRetriveData';
import { padding } from '@mui/system';





function DetailsPage() {

    const { id } = useParams();
    const RetriveQuery = useRetriveData(id);
  
    if (RetriveQuery.isLoading)
      return <div>Loading...</div>
    if (RetriveQuery.error) {
      return <div>{RetriveQuery.error.message}</div>
    }
    

    return (
        <div style={{padding:20}}>
            <div style={{ display: 'flex', marginBottom: 55, width: '100%' }}>
                <div style={{ width: '50%',  }}>
                    <DetailsCarosel img={RetriveQuery.data.data[0].img}/>
                </div>
                <div>
                    <DetailsDescription product={RetriveQuery.data.data[0]}/>
                </div>

            </div>

            <BasicTab />
        </div>
    )
}

export default DetailsPage ;