INSERT INTO Services (idService, nomService)
VALUES
    (0, 'Dermatologie'),
    (1, 'Neurologie'),
    (2, 'Ophtalmologie'),
    (3, 'Orthopédie'),
    (4, 'Psychiatrie'),
    (5, 'Cardiologie'),
    (6, 'Pédiatrie'),
    (7, 'Chirurgie'),
    (8, 'Gynécologie'),
    (9, 'Radiologie');

-- Medecins
INSERT INTO Medecins (idMedecin, prenom, nom, specialite, anneesExperience, idService)
VALUES
    (0, 'Marie', 'Rousseau', 'Dermatologie', 8, 3),
    (1, 'Philippe', 'Lemelin', 'Neurologie', 6, 4),
    (2, 'Valérie', 'Bélanger', 'Ophtalmologie', 10, 1),
    (3, 'Alex', 'Michaud', 'Orthopédie', 12, 2),
    (4, 'Nathalie', 'Gagné', 'Psychiatrie', 9, 3),
    (5, 'Simon', 'Tremblay', 'Cardiologie', 15, 4),
    (6, 'Audrey', 'Beaulieu', 'Pédiatrie', 7, 1),
    (7, 'David', 'Fournier', 'Chirurgie', 11, 2),
    (8, 'Isabelle', 'Lapointe', 'Gynécologie', 14, 3),
    (9, 'François', 'Martel', 'Radiologie', 5, 4);