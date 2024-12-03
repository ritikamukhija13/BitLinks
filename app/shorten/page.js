"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [url, seturl] = useState("")
  const [shortUrl, setshortUrl] = useState("")
  const [generated, setgenerated] = useState("")
  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) =>
        {
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
          seturl("")
          setshortUrl("")
         

         console.log(result)
         alert(result.message)
        })
      .catch((error) => console.error(error));
  }



  return (
    <div className='mx-auto max-w-lg my-16 p-8 rounded-lg bg-purple-200 flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-3'>
        <input type="text"
          value={url}
          placeholder='Enter Your URL'
          onChange={e => { seturl(e.target.value) }}
          className='px-4 py-2 focus:outline-purple-600 rounded-md' />
        <input type="text"
          placeholder='Enter preferred short URL'
          value={shortUrl}
          onChange={e => { setshortUrl(e.target.value) }}
          className='px-4 py-2 focus:outline-purple-600 rounded-md' />
        <button className='bg-purple-500 text-white shadow-lg font-semibold rounded-md px-2 py-1 my-3' onClick={generate}>Generate</button>
      </div>
      {
        generated && <>
        <span className='font-bold text-lg'>Your Link</span>
        <code>
            <Link target="_blank" href={generated}>{generated}</Link>
            
          </code>
          
        </>
        
      }
    </div>
  )
}

export default page