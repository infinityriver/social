import React from 'react'
import { connect } from 'react-redux' 
import { follow, setCurrentPage, setTotalUsersCount, setUser, toggleIsFetching, unfollow, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import { usersAPI } from '../../api/api'


class UsersContainer extends React.Component  {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUser(data.items)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {

        return <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      users = {this.props.users}
                      currentPage = {this.props.currentPage}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
                      onPageChanged = {this.onPageChanged}
                      toggleFollowingProgress = {this.props.toggleFollowingProgress}
                      followingInProgress = {this.props.followingInProgress}/>
        </> 
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch (followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch (unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch (setUserAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch (setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch (setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch (toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUser,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator
}
    ) (UsersContainer)

