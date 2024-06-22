# Moje portfolio w React

## <span style="color: #3498db;">Opis ogolny</span>
Strona internetowa przedstawiająca moje umiejetnosci oraz zainteresowania jako interaktywne CV. Głównym celem jest stworzenie inteaktywnej, responsywnej oraz ciekawej strony, która w czytelny sposob zaprezentuje moje umiejętnośći techniczne, zawodowe. Strona projektowana z myślą o urzytkownikach desktopowych jak i mobilnych.

## <span style="color: #2ecc71;">Technologie</span>

### <span style="color: white;">React</span>
React to popularna biblioteka JavaScript. W projekcie wykorzystano komponenty funkcyjne oraz hooki (`useState` i `useEffect`) - usprawnia zarządzanie aplikacją. React umożliwia tworzenie dynamicznych i interaktywnych interfejsów użytkownika poprzez komponenty, które mogą być wielokrotnie używane.

### <span style="color: white;">Font Awesome</span>
Zestaw ikon używanych do wyswietlania różnych symboli i grafik. Dodano za pomocą pakietu `@fortawesome/fontawesome-free`.

### <span style="color: white;">CSS</span>
Każdy komponent ma swój plik CSS co pomaga w przyszłej edycji i dostosywaniu.

## <span style="color: #e74c3c;">Struktura projektu</span>

<details>
<summary>Kliknij, aby zobaczyć szczegóły</summary>
<p>
<pre>
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
</pre>
</p>
</details>

## <span style="color: #f1c40f;">Problemy i rozwiązania</span>

### <span style="color: white;">Stylizacja komponentów</span>
**Problem**: Stylizacja komponentów i unikanie konfliktów styli.  
**Rozwiązanie**: Każdy komponent ma swój plik CSS, co izoluje style i zapobiega ich konfliktom.

### <span style="color: white;">Problem z Podświetleniem Tekstu</span>
**Problem**: Funkcjonalność podświetlenia tekstu nie działała poprawnie.  
**Rozwiązanie**:
- Upewniono się, że style CSS dla podświetlenia tekstu są poprawnie zastosowane.
- Zarządzano zachowaniem podświetlania za pomocą obsługi zdarzeń JavaScript, co poprawiło niezawodność.

### <span style="color: white;">Problem z Responsywnością</span>
**Problem**: Strona nie skalowała się prawidłowo w różnych rozmiarach okna.  
**Rozwiązanie**:
- Wprowadzono zapytania medialne (media queries) w CSS, aby dostosować projekt do rozmiaru okna.
- To zapewniło spójny układ na różnych urządzeniach.

## <span style="color: #9b59b6;">Możliwości w przyszłości</span>

### <span style="color: white;">Optymalizacja wydajności</span>
**Problem**: Spadek wydajności aplikacji przy renderowaniu dużej liczby komponentów.  
**Możliwe rozwiązanie**: Użycie hooka `useMemo` do memorizacji kosztownych obliczeń oraz `React.memo` do zapobiegania niepotrzebnym renderowaniom komponentów funkcyjnych, które nie zmieniają swoich propsów. Dzięki tym narzędziom można znacznie poprawić wydajność aplikacji.

### <span style="color: white;">Zarządzanie stanem komponentów</span>
**Problem**: Trudności w zarządzaniu stanem między różnymi komponentami.  
**Możliwe rozwiązanie**: Użycie hooka `useState` do lokalnego zarządzania stanem oraz `useContext` do zarządzania stanem globalnym w aplikacji. Dzięki temu można efektywnie przekazywać dane i metody między komponentami bez potrzeby przekazywania ich przez propsy na każdym poziomie hierarchii komponentów.

## <span style="color: #1abc9c;">Podsumowanie</span>
Projekt portfolio w React jest przykładem wykorzystania nowoczesnych narzędzi i technologii webowych. Dzięki React oraz CSS możliwe jest stworzenie wydajnej i łatwej do utrzymania aplikacji.

## <span style="color: #e67e22;">Reflekcja</span>
**Urzytecznosc React`a** jest na tyle duża że swoją prace inżynieryjską będę pisał w tym frameworku. Usprawni mi to cała prace oraz zaoszczedzi dużo czasu.
