import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
        
            <h3 className="animate__animated animate__animate__rubberBand"> { category } </h3>

            { loading && <p className="animate__animated animate__animate__flash">loading</p> }


            <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem                                 key={ img.id }
                            { ...img }
                        />
                    ))
                            
                }


            </div>
            
 


            
        </>
    )
}
