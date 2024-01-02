CREATE TABLE `surveys` (
	`id` integer PRIMARY KEY NOT NULL,
	`patient-id` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`sex` text
);
