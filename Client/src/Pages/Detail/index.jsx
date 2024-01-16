import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()
    const fetchDetail = async () => {
        const res = await axios(`http://localhost:5000/moduls/${id}`)
        setDetail(res.data)
    }
    useEffect(() => {
        fetchDetail()
    }, [])
    return (
        <>
            <Helmet>
                <title>Detail</title>
            </Helmet>
            <div className="DetailArea">
                {detail ? <>
                    <div className="Detail">
                        <h1>{detail.text}</h1>
                        <h1>{detail.title}</h1>
                    </div>
                </> : ''}
            </div>
        </>
    )
}

export default Detail