import React, { Component } from 'react';

const JournalContext = React.createContext({
    categories: [],
    journals: [],
    category: '',
    journal: '',
    updateSelectedCategory: () => { },
    updateSelectedJournal: () => { },
    addCategory: () => { },
    addJournal: () => { },
    patchJournal: () => { },
    deleteJournal: () => { },
    setError: () => { },
    clearError: () => { },
    error: null,
    setCategories: () => { },
    setJournals: () => { },
    reset: () => { }
});

export default JournalContext;

export class JournalProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            journals: [],
            selectedCategory: '',
            selectedJournal: ''
        };
    }

    setError = error => {
        console.log(error);
        this.setState({ error });
    }

    clearError = () => {
        this.setState({ error: null });
    }

    setCategories = categories => {
        this.setState({ categories });
    }

    setJournals = journals => {
        this.setState({ journals });
    }

    reset = () => {
        this.setState({
            selectedCategory: '',
            selectedJournal: ''
        });
    }

    addCategory = category => {
        this.setState({ categories: [...this.state.categories, category] });
    }

    addJournal = journal => {
        this.setState({ journals: [...this.state.journals, journal] });
    }

    updateSelectedCategory = category => {
        this.setState({ selectedCategory: category })
    }

    updateSelectedJournal = journal => {
        this.setState({ selectedJournal: journal });
    }

    patchJournal = (journal_id, updatedJournal) => {
        const newJournals = this.state.journals.map(journal =>
            (journal.id === journal_id)
                ? updatedJournal
                : journal
        );
        this.setState({ journals: newJournals });
    }

    deleteJournal = journal_id => {
        const newJournals = this.state.journals.filter(journal =>
            journal.id !== journal_id
        );
        this.setState({ journals: newJournals });
    }

    render() {
        const contextValue = {
            categories: this.state.categories,
            journals: this.state.journals,
            category: this.state.selectedCategory,
            journal: this.state.selectedJournal,
            updateSelectedCategory: this.updateSelectedCategory,
            updateSelectedJournal: this.updateSelectedJournal,
            addCategory: this.addCategory,
            addJournal: this.addJournal,
            patchJournal: this.patchJournal,
            deleteJournal: this.deleteJournal,
            setError: this.setError,
            clearError: this.clearError,
            error: this.state.error,
            setCategories: this.setCategories,
            setJournals: this.setJournals,
            reset: this.reset
        };

        return (
            <JournalContext.Provider value={contextValue}>
                {this.props.children}
            </JournalContext.Provider>
        );
    }
}