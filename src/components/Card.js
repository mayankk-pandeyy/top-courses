import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = function(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandeler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((likedArray) => likedArray.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((likedArray) => ([...likedArray, course.id]));
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}></img>

                <div className='w-[40px] h-[40px] bg-white absolute rounded-full -bottom-3 right-2 flex justify-center items-center'>
                    <button onClick={clickHandeler}>
                        {
                            (likedCourses.includes(course.id)) ?
                            <FcLike fontSize="1.75rem"/>
                        : 
                            <FcLikePlaceholder fontSize="1.75rem"/>
                        
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ?
                        (`${course.description.substr(0, 100)}...`) : (course.description)
                    }
                </p>
            </div>
        </div>
    );
}

export default Card;