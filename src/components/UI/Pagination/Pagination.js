import React, { Component } from 'react'

import './Pagination.css'

class Pagination extends Component {

    pages = [10, 20, 30, 40, 50];
    state = {
        currentPg: 1,
        currentPageSize: 10
    }

    componentDidUpdate(props) {
        if (props.currentPage && props.currentPage !== this.state.currentPg) {
            this.setState({
                currentPg: this.props.currentPage
            })
        }
        if (props.currentPageSize && props.currentPageSize !== this.state.currentPageSize) {
            this.setState({
                currentPageSize: this.props.currentPageSize
            })
        }
    }

    onPgnoClick = async (e, ele) => {
        this.props.onPagination(ele - 1);
        this.setState({
            currentPg: ele
        })

    }

    onClick = async (e, type) => {
        if (type === "prev") {
            if (this.state.currentPg > 1) {
                const currentPg = this.state.currentPg - 1;
                this.props.onPagination(currentPg - 1);
                await this.setState({
                    currentPg: this.state.currentPg - 1
                })
            }
        }

        if (type === "next") {
            if (this.state.currentPg < this.props.pages) {
                const currentPg = this.state.currentPg + 1;
                this.props.onPagination(currentPg - 1);
                await this.setState({
                    currentPg: this.state.currentPg + 1
                })
            }
        }
    }

    onPageSizeChange = (e) => {
        this.setState({
            currentPageSize: e.target.value
        });
        this.props.onPageSizeChange(e.target.value);
    }

    render() {
        const pagesArray = Array.from(Array(this.props.pages), (_, i) => i + 1);
        return (
            <div className="custom_pagination float-right mb-4">
                <div>
                    <div className="d-inline-block mr-2">
                        <span className="d-inline-block ml-3 mr-1">Items per page:</span>
                        <select className="d-inline-block form-control pl-0" value={this.state.currentPageSize} onChange={this.onPageSizeChange}>
                            {this.pages.map(value => {
                                return <option key={value} value={value}>{value}</option>
                            })}
                        </select>
                    </div>
                    <button onClick={(e) => { this.onClick(e, "prev") }} className="custom_pagination__left">&lt;</button>
                    {pagesArray.map((ele, index) => {
                        let pgno = ele
                        return <button key={index} onClick={(e, ele = pgno) => { this.onPgnoClick(e, ele) }} className={`custom_pagination__pgno ${this.state.currentPg === ele ? 'active' : ''}`}>{ele}</button>
                    })}
                    <button onClick={(e) => { this.onClick(e, "next") }} className="custom_pagination__left" disabled={this.state.currentPg === (this.props.pages)}>&gt;</button>
                </div>
            </div>
        )
    }
}

export default Pagination
