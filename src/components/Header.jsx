import React from 'react'
import pemalang from '../assets/LogoPemalang.png'
import undip from '../assets/Undip.png'

export default function Header() {
  return (
    <section className='h-[500px] text-center mx-10 mt-10'>
      <div className='flex justify-center'>
        <div className='flex justify-center items-center'>
          <img className='object-contain h-[70px] w-[70px]' src={pemalang} alt="Logo Kab. Pemalang" />
        </div>
        <div>
          <img className='object-contain h-[90px] w-[90px]' src={undip} alt="Logo Kab. Pemalang" />
        </div>
      </div>
      <p>KKN UNDIP TIM I TAHUN 2024</p>
      <p>bersama</p>
      <p>Masyarakat Desa Kreyo, Kec. Randudongkal, Kab. Pemalang</p>
      <p>mempersembahkan</p>
      <h1 className='font-bold text-5xl mt-5'>Sintesis Pupuk Kompos dari Limbah Organik Rumah Tangga </h1>
      <div className='flex items-center justify-center rounded-lg h-[100px] mt-5 bg-[#4A693F]'>
        <p className='font-bold text-4xl text-[#F8FFEE] text-center'>Coming Soon !</p>
      </div>
    </section>
  )
}
