import React, {useEffect} from 'react'

import { AiOutlineHeart } from 'react-icons/ai'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import wallppr from '../assets/home2.jpg'
import wallppr2 from '../assets/vegan.jpg'
import img3 from '../assets/img3.jpg'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img4.jpg'

gsap.registerPlugin(ScrollTrigger)


const Home = () => {


    useEffect(() => {

        /*GSAP*/
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content p',
                start: 'top 90%',
                //markers:true
            }
        });
        tl3.fromTo('.content p', { y: 100, opacity: 0, duration: 1.5 }, { y: 0, opacity: 1, duration: 1.5 })

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '.content h1',
                start: 'top 80%',
                //markers:true    

            }
        })
        tl4.fromTo('.content h1', { x: 50, opacity: 0, duration: 1.5 }, { x: 0, opacity: 1, duration: 1.5 })
        /*CONTAINER1*/
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.img1',
                //markers: true,
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl.fromTo(".img1", { width: '0%', opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content1 h1", { x: '-100%', opacity: 0, duration: 2 }, { x: 0, opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content1 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: '.imgOne',
                //markers: true,
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl5.fromTo(".imgOne", { width: '0%', opacity: 0, duration: 2 }, { width: '100%', opacity: 1, duration: 2 })
            .fromTo(".content1 h1", { x: '-100%', opacity: 0, duration: 2 }, { x: 0, opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content1 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        /*CONTAINER2*/
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.img2',
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl2.fromTo(".img2", { width: 0, opacity: 0, duration: 2 }, { width: '50%', opacity: 1, duration: 2 })
            .fromTo(".content2 h1", { x: '18%', opacity: 0, duration: 2 }, { x: '-10%', opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content2 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')

        const tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: '.imgTwo',
                start: "top 60%",
                //toggleActions:"restart none none none"
            }
        });
        tl6.fromTo(".imgTwo", { width: 0, opacity: 0, duration: 2 }, { width: '100%', opacity: 1, duration: 2 })
            .fromTo(".content2 h1", { x: '18%', opacity: 0, duration: 2 }, { x: '-10%', opacity: 1, duration: 2 }, '-=2')
            .fromTo(".content2 p", { y: 300, opacity: 0, duration: 2 }, { y: 0, opacity: 1, duration: 2, ease: 'bounce' }, '-=1')
        /**/

    }, [])



    return (
        <section>
            <main>
                <div className='wall-home'>

                    <div>
                        <img src={wallppr} alt="img" />
                        <img className='res-img' src={wallppr2} alt="img2" />
                        <div className='title'>
                            <span className='t1'>Eat Healthy & </span>
                            <span className='t2'>be Nutrition Wealthy,</span>
                            <br />
                            <span className='t3'>is what we offer</span>
                        </div>
                    </div>


                    <div className='container-title'>
                        <img src={img3} alt="intro" />
                        <div className='content'>
                            <h1>We are HealthyMe!</h1>
                            <p>Our mission is to make a nourishing plant-based lifestyle accessible to everyone. <br /> We serve healthy & nutrition rich meals directly at your doorsteps. We also make you feel excited and supported in introducing more plant-based foods into your meals, snacks, desserts, and everything in-between! </p>
                            <Link to='/about'>
                                <button onClick={() => { console.log('you clicked learn-more') }}>Learn more <AiOutlineHeart /> </button>
                            </Link>
                        </div>
                    </div>


                    <div className='container1'>
                        <div className='content1'>
                            <h1>To eat is a necessity, but to eat intelligently is an art.</h1>
                            <p>Eat the best, leave the rest.</p>
                        </div>
                        <img className='img1 ' src={img1} alt="img1" />
                        <img className='imgOne' src={img1} alt="img1" />
                    </div>

                    <div className='container2'>
                        <img className='img2' src={img2} alt="img2" />
                        <img className='imgTwo' src={img2} alt="img2" />
                        <div className='content2'>
                            <h1>Our Goal Is to Help Everyone Live a Healthier Lifestyle.</h1>
                            <p>No artificial colors or flavors</p>
                        </div>
                    </div>


                </div>
            </main>
        </section >
    )
}

export default Home
