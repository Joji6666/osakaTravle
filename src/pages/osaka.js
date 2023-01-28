import React from "react";
import "./osaka.css";

export default function Osaka() {
  return (
    <>
      <h1>용준이의 오사카 여행일지</h1>

      <div
        className="day-one"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2>1일차</h2>
        <span>05시 10분 집에서 출발 9시 10분 비행기 탑승</span>
        <span>
          {`우리집->운서역 공영주차장 40분 소요->주차장에서 공항까지 20분->도착 후 (와이파이 수령 및 환전 등등)1시간`}
        </span>
        <span>{`11:10분 일본 간사이 공항 도착->입국심사 1시간소요->2층으로 올라가서 하루카 티켓교환->편의점 먹거리사고 열차 탑승`}</span>
        <span>{`14:00분 교토 도착->교토역에서 산인본선(JR)타고 사가아라시야마에서 내림(20소요)->15:30 우나기 히로카와(장어덮밥)or숙소 도착 후 짐 정리`}</span>
      </div>
    </>
  );
}
