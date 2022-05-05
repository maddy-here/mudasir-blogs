import Document, { Html, Main, NextScript, Head} from 'next/document';

class myDocument extends Document{
    render(){
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id ='notifications'></div>
                </body>
            </Html>
        )
    }
}

export default myDocument;