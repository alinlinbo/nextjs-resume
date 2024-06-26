import {useEffect, useRef, useState} from "react";
import Script from 'next/script'
import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    m,
    Variants
} from "framer-motion";
import {useRouter} from "next/router";
import MenuNavigator from "../navigations/MenuNavigator";
import FramerMotionVars from "../../lib/framerMotionVars";
import NavigationCards from "../navigations/NavigationCards";
import {useBlogNavigation} from "../../lib/blogNavigation";
import NavTitle from '../navigations/NavTitle'

const usePrevState = function (value:any){
    const preRef = useRef()
    useEffect(()=>{
        preRef.current = value
    },[value])
    return preRef.current
}

function MainLayout({children}:{
    children:any
}) {
    const [exitBefore, setExitBefore] = useState(true);
    const router = useRouter()
    const navigation = useBlogNavigation();
    const preVisible = usePrevState(navigation.visible)
    const preRoute = usePrevState(navigation.route)
    const [enterAnimation, setEnterAnimation] = useState('slideEnter')
    const vars: Variants = FramerMotionVars.NavigationVars
    useEffect(()=>{
        if (navigation.visible) {
            navigation.setVisible(false)
        }
    },[router.route])
    useEffect(()=>{
        if (navigation.route !== router.route){
            console.log('初始化路由',router.route)
            navigation.setRoute(router.route)
        }
    },[])
    useEffect(()=>{
        if (navigation.route !== router.route){
            navigation.setRoute(router.route)
        }
    },[router.route])
    useEffect(() => {
        const routeChange = navigation.route !== preRoute
        const animations:any = {
            '000':'slideEnter',
            '001':'slideEnter',
            '010':'scaleUp',
            '011':'fadeIn',
            '100':'scaleDown',
            '101':'',
            '110':'scaleDown',
            '111':'scaleUp',
        }
        const key = [navigation.visible,!!preVisible,routeChange].map(Number).join('')
        console.log('animation key',key)
        setEnterAnimation(animations[key])
    }, [navigation.visible,navigation.route]);
    return (
        <div className="layout-wrap">
            <Script
                strategy={"beforeInteractive"}
                src="/amap.js"></Script>
            <Script
                strategy={"beforeInteractive"}
                src="https://webapi.amap.com/loader.js"></Script>
            <Script src="https://at.alicdn.com/t/c/font_2780182_os7458mmx2b.js"></Script>
            <LazyMotion features={domAnimation}>
                <AnimatePresence
                    initial={false}
                    exitBeforeEnter={!exitBefore}>
                    <m.div
                        key={router.route}
                        custom={{
                            animationName: enterAnimation,
                            route: navigation.route,
                            list: navigation.BlogNavigationList,
                            checkedPath: navigation.checkedPath
                        }}
                        variants={vars}
                        initial="initial"
                        animate={'pageEnter'}
                        exit={'pageExit'}
                        className="page-wrap"
                    >
                        {children}
                    </m.div>
                </AnimatePresence>
            </LazyMotion>
            <NavigationCards/>
            <MenuNavigator/>
            <NavTitle/>
        </div>
    );
}

export default MainLayout
