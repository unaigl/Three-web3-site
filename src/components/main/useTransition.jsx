import React from 'react';
import sleep from 'sleep-promise';
import './style.css';

// LOOK FOR "START HERE" on line #62
// TODO en lugar de pasarselo como props, pasarserlo con useContext, ya que sino se vuleve a renderear. provider.consumerValue
    // TODO https://github.com/facebook/react/issues/21030 https://codesandbox.io/s/kind-morse-3rh34?file=/src/App.js:160-163

export default function App() {
    return (
        <div>
            <h1>Pokedex memory game</h1>
            <p>
                Test your Poke-memory by guessing which Pokemon is next — before it
                appears.
            </p>
            <ErrorBoundary>
                <React.Suspense fallback="loading pokemon…">
                    <PokemonDetail />
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
}

function suspensify(promise) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
        (r) => {
            status = 'success';
            result = r;
        },
        (e) => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        },
    };
}

let initialPokemon = suspensify(fetchPokemon(1));

function PokemonDetail() {
    let [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
    let pokemon = pokemonResource.read();

    let [isPending, startTransition] = React.useTransition();

    return (
        <article style={{ opacity: isPending ? 0.3 : 1 }}>
            <h2>{pokemon.name}</h2>
            <button
                type="button"
                onClick={() =>
                    startTransition(() => {
                        setPokemonResource(suspensify(fetchPokemon(pokemon.id + 1)));
                    })
                }
            >
                Next
            </button>
        </article>
    );
}

function fetchPokemon(id = 1) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then(sleep(500));
}

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}
