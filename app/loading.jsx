export default function MealsLoader(){
    return (
        <div>
            <span className="text-center" style={{animation: "loading 1.2s ease-in-out infinite"}}>Loading meals...</span>
            <style jsx>{`
                @keyframes loading {
                    0%, 100% {
                        color: #e9e9e9;
                    }
                    50% {
                        color: #b89b84;
                    }
                }
            `}</style>
        </div>
    )
}