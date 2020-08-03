
const LOAD_TXT = "LOAD-TXT"
const SET_FILE_NAME = "SET-FILE-NAME"

let Store = {
    _State: {
        Declaration: {
            DeclarationData: [
                { Name: "Декларация 1", File: "Declaration1.txt" },
                { Name: "Декларация 2", File: "Declaration2.txt" },
                { Name: "Декларация 3", File: "Declaration3.txt" }
            ]
        },

        FNS: {
            FNSData: [
                { Name: "Извещение 1", File: "FNS1.txt" },
                { Name: "Извещение 2", File: "FNS2.txt" },
                { Name: "Извещение 3", File: "FNS3.txt" }
            ]
        },

        Contracts: {
            ContractsData: [
                { Name: "Договор 1", File: "Contract1.txt" },
                { Name: "Договор 2", File: "Contract2.txt" },
                { Name: "Договор 3", File: "Contract3.txt" }
            ]
        },

        Partners: {
            PartnersData: [
                { Name: "Письмо 1", File: "Partner1.txt" },
                { Name: "Письмо 2", File: "Partner2.txt" },
                { Name: "Письмо 3", File: "Partner3.txt" }
            ]
        },

        fileName: 'никакой',

        documentText: [],
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
    },
    getState() {
        return (this._State)
    },

    setFileName(Name) {
        this._State.fileName = Name;
        this._callSubscriber()
    },

    loadTxt() {
        
        fetch("/documents/" + this._State.fileName)
            .then(function (responce) {
                return responce.text()
            })
            .then(function (data) {
                this._State.documentText = data;
                console.log(this._State.documentText)
                this._callSubscriber()
            })
    },
    

    dispatch(action) {
        if (action.type === SET_FILE_NAME) 
            this.setFileName(action.name)
        else if (action.type === LOAD_TXT)
            this.loadTxt()
    }
}

export const setFileNameActionCreator = (Name) => (
    {
        type: SET_FILE_NAME,
        name: Name
    }
)

export const loadTxtActionCreator = () => (
    {
        type: LOAD_TXT,
    }
)

export default Store;