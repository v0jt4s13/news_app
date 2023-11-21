# Dokumentacja, o co cho ?

## GIT - czyli jak i czemu to działa
1. Zaktualizuj listę zdalnych gałęzi:
### git fetch
Ta komenda pobierze informacje o wszystkich zdalnych gałęziach, ale nie zmieni lokalnych plików.

Sprawdź dostępne zdalne gałęzie:
Możesz sprawdzić dostępne zdalne gałęzie, używając:

bash
Copy code
git branch -r
Ta komenda wyświetli listę wszystkich gałęzi w zdalnym repozytorium.

Pobierz i przełącz się na zdalną gałąź:
Aby pobrać zdalną gałąź i przełączyć się na nią lokalnie, użyj komendy git checkout z nazwą gałęzi. Na przykład, jeśli chcesz pobrać gałąź o nazwie feature-branch, użyjesz:

bash
Copy code
git checkout feature-branch
Jeśli gałąź nie istnieje lokalnie, Git automatycznie utworzy ją i przełączy się na nią, śledząc jej zdalny odpowiednik.

Alternatywnie, użyj git switch:
W nowszych wersjach Git, możesz również użyć git switch do tego samego celu:

bash
Copy code
git switch feature-branch
Jeśli gałąź nie istnieje lokalnie, ta komenda również ją utworzy i przełączy się na nią, śledząc jej zdalny odpowiednik.