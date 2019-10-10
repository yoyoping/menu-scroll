import React, { useState, useEffect } from 'react';
import './index.scss'
let w_ = 0
const Home_: React.FC<any> = () => {
  const [page, setPage] = useState(1) // 当前页
  const [movedis, setMovedis] = useState(0) // 当前移动距离

  const changePage = (pageNum: number) => {
    const move_ = Math.floor(w_ / 100) * 100 // 每次移动的距离
    const liDom: any = document.querySelectorAll(".menu li") // 菜单个数
    if (pageNum < 1) {
      setPage(1)
      setMovedis(0)
    } else if (movedis >= (liDom.length * 100 - w_) && pageNum > page) { // 判断翻到最后一页
    } else {
      if (move_ * (pageNum-1) > (liDom.length * 100 - w_)) { // 判断下一页的长度不够长导致后面空白
        setMovedis(liDom.length * 100 - w_)
      } else {
        setMovedis(move_ * (pageNum - 1))
      }
      setPage(pageNum)
    }
  }

  useEffect(() => {
    const dom_: any = document.querySelector(".menu")
    w_ = dom_.offsetWidth
  })

  return (
    <div className="container">
      <span className="prev" onClick={() => changePage(page - 1)}>上一页</span>
      <div className="menu">
        <ul style={{transform: `translateX(-${movedis}px)`, transition: 'all 0.5s'}}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
        </ul>
      </div>
      <span className="next" onClick={() => changePage(page + 1)}>下一页</span>
    </div>
  )
}

export default Home_