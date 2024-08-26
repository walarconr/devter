export default function AppLayout({children}){
    return(
        <>
            <main>
                {children}
            </main>
            <style jsx global>{`
                    *{
                        box-sizing: border-box;
                    }

                    body {
                        padding: 0;
                        margin: 0;
                        font-family: system-ui;
                    }
                `}</style>
        </>
    )
}