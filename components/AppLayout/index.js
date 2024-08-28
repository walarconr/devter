import {fonts, colors} from '../../styles/theme';
import {addOpacityToColor} from '../../styles/utils';
import { breakpoints } from '../../styles/theme';

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export default function AppLayout({children}){
    return(
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>

            <style jsx>{`
                    div {
                        display: grid;
                        place-items: center;
                        height: 100vh;
                    }

                    main {
                        background-color: ${colors.white};
                        border-radius: 100vm;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                        height: 100%;
                        width: 100%;
                    }

                    @media (min-width: ${breakpoints.mobile}){
                        main {
                            height: 90vh;
                            width: ${breakpoints.mobile};
                        }
                    }


                `}</style>

            <style jsx global>{`
                    *{
                        box-sizing: border-box;
                    }

                    html, body {
                        background-color: ${colors.white};
                        background-image:
                            radial-gradient(${backgroundColor} 1px, transparent 1px),
                            radial-gradient(${backgroundColor} 1px, transparent 1px);
                        background-position: 0 0, 25px 25px;
                        background-size: 50px 50px;
                        padding: 0;
                        margin: 0;
                        font-family: ${fonts.base};
                    }
                `}</style>
        </>
    )
}