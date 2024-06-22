# Moje portfolio w React

## Opis ogolny
    Strona internetowa przedstawiająca moje umiejetnosci oraz zainteresowania jako interaktywne CV.
    Głównym celem jest stworzenie inteaktywnej, responsywnej oraz ciekawej strony, która w czytelny sposob zaprezentuje moje umiejętnośći techniczne, zawodowe.
    Strona projektowana z myślą o urzytkownikach desktopowych jak i mobilnych.


## Technologie

### React
    React to popularna biblioteka JavaScript. W projekcie wykorzystano komponenty funkcyjne oraz hooki (`useState` i `useEffect`) - usprawnia zarządzanie aplikacją. React umożliwia tworzenie dynamicznych i interaktywnych interfejsów użytkownika poprzez komponenty, które mogą być wielokrotnie używane.

### Font Awesome
    Zestaw ikon używanych do wyswietlania różnych symboli i grafik.
    Dodano za pomocą pakietu '@fortawesome/fontawesome-free'.

### CSS
    Każdy komponent ma swój plik CSS co pomaga w przyszłej edycji i dostosywaniu.


## Struktura projektu
    moje_portfolio_react/
    ├── public/
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── ikony/
    │   │   ├── github.png
    │   │   ├── linkedin.png
    │   │   ├── instagram.png
    │   │   ├── facebook.png
    │   │   ├── email.png
    │   ├── tlo.jpg
    ├── src/
    │   ├── components/
    │   │   ├── About.js
    │   │   ├── About.css
    │   │   ├── Header.js
    │   │   ├── Header.css
    │   │   ├── Interests.js
    │   │   ├── Interests.css
    │   │   ├── Menu.js
    │   │   ├── Menu.css
    │   │   ├── Skills.js
    │   │   ├── Skills.css
    │   │   ├── SocialMedia.js
    │   │   ├── SocialMedia.css
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   ├── index.css
    ├──package-lock.json
    ├── package.json
    ├── README.md


## Problemy i rozwiązania

### Stylizacja komponentów
**Problem**: Stylizacja komponentów i unikanie konfliktów styli.  
**Rozwiązanie**: Każdy komponent ma swój plik CSS, co izoluje style i zapobiega ich konfliktom.

### Problem z Podświetleniem Tekstu
**Problem**: Funkcjonalność podświetlenia tekstu nie działała poprawnie.  
**Rozwiązanie**:
- Upewniono się, że style CSS dla podświetlenia tekstu są poprawnie zastosowane.
- Zarządzano zachowaniem podświetlania za pomocą obsługi zdarzeń JavaScript, co poprawiło niezawodność.

### Problem z Responsywnością
**Problem**: Strona nie skalowała się prawidłowo w różnych rozmiarach okna.  
**Rozwiązanie**:
- Wprowadzono zapytania medialne (media queries) w CSS, aby dostosować projekt do rozmiaru okna.
- To zapewniło spójny układ na różnych urządzeniach.

## Możliwości w przyszłości

### Optymalizacja wydajności
**Problem**: Spadek wydajności aplikacji przy renderowaniu dużej liczby komponentów.  
**Możliwe rozwiązanie**: Użycie hooka `useMemo` do memorizacji kosztownych obliczeń oraz `React.memo` do zapobiegania niepotrzebnym renderowaniom komponentów funkcyjnych, które nie zmieniają swoich propsów. Dzięki tym narzędziom można znacznie poprawić wydajność aplikacji.

### Zarządzanie stanem komponentów
**Problem**: Trudności w zarządzaniu stanem między różnymi komponentami.  
**Możliwe rozwiązanie**: Użycie hooka `useState` do lokalnego zarządzania stanem oraz `useContext` do zarządzania stanem globalnym w aplikacji. Dzięki temu można efektywnie przekazywać dane i metody między komponentami bez potrzeby przekazywania ich przez propsy na każdym poziomie hierarchii komponentów.

## Podsumowanie
Projekt portfolio w React jest przykładem wykorzystania nowoczesnych narzędzi i technologii webowych. Dzięki React oraz CSS możliwe jest stworzenie wydajnej i łatwej do utrzymania aplikacji.

## Reflekcja
**Urzytecznosc React`a** jest na tyle duża że swoją prace inżynieryjską będę pisał w tym frameworku. Usprawni mi to cała prace oraz zaoszczedzi dużo czasu. 